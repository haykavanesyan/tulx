'use client';

import { Play, RotateCcw } from 'lucide-react';

type PlaygroundActionsProps = {
  isRunning: boolean;
  onRun: () => void;
  onReset: () => void;
};

export function PlaygroundActions({
  isRunning,
  onRun,
  onReset,
}: PlaygroundActionsProps) {
  return (
    <div className="flex gap-2 w-full sm:w-auto">
      <button
        onClick={onRun}
        disabled={isRunning}
        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Play className="h-4 w-4" />
        {isRunning ? 'Running...' : 'Run'}
      </button>
      <button
        onClick={onReset}
        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-accent transition-colors"
      >
        <RotateCcw className="h-4 w-4" />
        Reset
      </button>
    </div>
  );
}
