"use client";

import { IKContext, IKUpload } from "imagekitio-react";
import { useState } from "react";

type UploadResponse = {
  url: string;
};

type AuthResponse = {
  signature: string;
  expire: number;
  token: string;
};

const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!;
const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!;

const authenticator = async (): Promise<AuthResponse> => {
  const res = await fetch("/api/imagekit-auth");
  if (!res.ok) throw new Error("Auth failed");
  return res.json();
};

export default function ImageUpload() {
  const [error, setError] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  return (
    <IKContext
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        fileName="upload.jpg"
        folder="/lakshya-library"
        useUniqueFileName
        transformation={{
          pre: "q-80",
        }}
        validateFile={(file: File) => {
          if (file.size > 5 * 1024 * 1024) {
            setError("File size must be under 5MB");
            return false;
          }
          return true;
        }}
        onSuccess={(res: UploadResponse) => {
          setImageUrl(res.url);
          setError("");
        }}
        onError={(err: unknown) => {
          console.error(err);
          setError("Upload failed");
        }}
      />
    </IKContext>
  );
}
