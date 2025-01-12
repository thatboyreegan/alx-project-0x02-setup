import React, { useState } from "react";
import { PostModalProps } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSave }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const handleSave = () => {
      if (title && content) {
        onSave({ title, content });
        setTitle('');
        setContent('');
        onClose();
      }
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content text-black p-3">
          <h2>Create a New Post</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
              />
            </div>
            <div>
              <label>Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter content"
              />
            </div>
            <div className="modal-actions">
              <button type="button" onClick={onClose}>
                Cancel
              </button>
              <button type="button" onClick={handleSave}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default PostModal;