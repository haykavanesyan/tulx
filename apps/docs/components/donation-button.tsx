'use client';

import { Coffee, Copy } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CRYPTO_ADDRESSES } from '@/lib/constants';

export function DonationButton() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (address: string, index: number) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="fixed bottom-6 right-6 z-50 group">
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-foreground text-background px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap shadow-lg">
              Buy me a tea
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-foreground"></div>
            </div>
          </div>
          <Button
            className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 bg-primary hover:bg-primary/90 group-hover:scale-105"
            size="icon"
            aria-label="Donate with crypto"
          >
            <Coffee className="h-6 w-6" />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Support the Project</DialogTitle>
          <DialogDescription>
            If you find this project useful, consider making a donation. Thank
            you for your support!
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {CRYPTO_ADDRESSES.map((crypto, index) => (
            <div
              key={crypto.symbol}
              className="flex flex-col gap-2 rounded-lg border border-border bg-muted/50 p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm">{crypto.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {crypto.symbol}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy(crypto.address, index)}
                  className="h-8 w-8"
                >
                  <Copy
                    className={`h-4 w-4 ${
                      copiedIndex === index ? 'text-primary' : ''
                    }`}
                  />
                </Button>
              </div>
              <code className="break-all rounded bg-background px-2 py-1.5 text-xs font-mono text-foreground">
                {crypto.address}
              </code>
              {copiedIndex === index && (
                <p className="text-xs text-primary">Copied to clipboard!</p>
              )}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
