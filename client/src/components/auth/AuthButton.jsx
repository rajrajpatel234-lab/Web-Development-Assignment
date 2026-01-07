export default function AuthButton({ text, onClick }) {
  return (
    <button className="auth-button" onClick={onClick}>
      {text}
    </button>
  );
}
