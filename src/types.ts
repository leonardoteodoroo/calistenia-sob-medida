/* eslint-disable @typescript-eslint/no-explicit-any */
export interface StepProps {
  onNext: (data?: any) => void;
  answers?: Record<string, any>;
}
