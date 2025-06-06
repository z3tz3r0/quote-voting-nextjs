import { LoginForm } from "@/components/LoginForm";
import { SignInPageProps } from "@/types/loginForm.type";

const SignInPage = ({ searchParams }: SignInPageProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <LoginForm
        className="min-w-md mx-auto"
        errorUrl={searchParams?.error}
        callbackUrl={searchParams?.callbackUrl}
      />
    </div>
  );
};

export default SignInPage;
