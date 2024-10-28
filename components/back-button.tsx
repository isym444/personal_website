'use client';

import { Button } from "@/components/ui/button";

export function BackButton() {
  return (
    <Button variant="outline" onClick={() => window.history.back()}>
      ← Back to all posts
    </Button>
  );
} 