
export interface CardProps {
    title: string,
    content: string
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (post: { title: string; content: string }) => void;
  }

export interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    onClick?: () => void;
    children: React.ReactNode;
}

export interface PostProps {
    title: string;
    content: string;
    userId: number;
}

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }