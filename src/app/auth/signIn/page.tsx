import { LoginForm } from "@/components/LoginForm";

const SignInPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const { error, callbackUrl } = await searchParams;

  return (
    <div className="min-h-screen flex justify-center items-center">
      <LoginForm
        className="min-w-md mx-auto"
        errorUrl={error}
        callbackUrl={callbackUrl}
      />
    </div>
  );
};

export default SignInPage;
