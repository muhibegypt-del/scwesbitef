import { cn } from '../../lib/utils';

interface StatusIndicatorProps {
  status: 'urgent' | 'active' | 'completed' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const statusConfig = {
  urgent: {
    color: 'bg-red-500',
    animation: 'animate-pulse',
  },
  active: {
    color: 'bg-green-500',
    animation: 'animate-pulse',
  },
  completed: {
    color: 'bg-blue-500',
    animation: '',
  },
  warning: {
    color: 'bg-yellow-500',
    animation: 'animate-bounce',
  },
};

const sizeConfig = {
  sm: 'w-1.5 h-1.5',
  md: 'w-2 h-2',
  lg: 'w-3 h-3',
};

export function StatusIndicator({ 
  status, 
  size = 'md', 
  className 
}: StatusIndicatorProps) {
  const config = statusConfig[status];
  const sizeClass = sizeConfig[size];

  return (
    <span
      className={cn(
        'inline-block rounded-full',
        config.color,
        config.animation,
        sizeClass,
        className
      )}
      aria-label={`${status} status indicator`}
    />
  );
}