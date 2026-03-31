export function Logo({ className, size, onClick }: { className?: string, size?: string, onClick?: () => void }) {
  // Map size to dimensions if needed, otherwise use className
  const sizeStyle = size === 'small' ? { width: '48px', height: '48px' } : 
                    size === 'large' ? { width: '120px', height: '120px' } : {};

  return (
    <img 
      src="https://i.ibb.co/ZzDyvmt0/1769711064-removebg-preview.png" 
      alt="logo" 
      className={className}
      onClick={onClick}
      style={{ ...sizeStyle, cursor: onClick ? 'pointer' : 'default', objectFit: 'contain' }}
      referrerPolicy="no-referrer"
    />
  );
}
