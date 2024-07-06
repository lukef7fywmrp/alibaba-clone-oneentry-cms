import LoginForm from "@/components/LoginForm";
import { getApiInstance } from "@/oneentry";

async function LoginPage() {
  const apiInstance = await getApiInstance();
  const loginForm = await apiInstance?.Forms.getFormByMarker("signin");

  return <LoginForm formEntity={loginForm} />;
}

export default LoginPage;
