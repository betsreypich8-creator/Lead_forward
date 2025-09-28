
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  disabled = false 
}: ButtonProps) {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap';
  
  const variants = {
    primary: 'bg-orange-400 text-blue-900 hover:bg-orange-300 hover:shadow-lg',
    secondary: 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg',
    outline: 'border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-blue-900'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
}
