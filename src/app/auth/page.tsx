import LoginForm from "@/components/LoginForm";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <LoginForm />
    </div>
  );
}