interface PropertyBadgeProps {
    icon?: string;
    text: string;
    variant?: "default" | "outline" | "secondary";
  }
  
  export function PropertyBadge({ icon, text, variant = "default" }: PropertyBadgeProps) {
    const baseClasses = "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium";
    
    const variantClasses = {
      default: "bg-gray-100 text-gray-800",
      outline: "border border-gray-200 text-gray-600",
      secondary: "bg-blue-50 text-blue-600",
    };
  
    return (
      <span className={`${baseClasses} ${variantClasses[variant]}`}>
        {icon && <span className="w-3 h-3">{icon}</span>}
        {text}
      </span>
    );
  }