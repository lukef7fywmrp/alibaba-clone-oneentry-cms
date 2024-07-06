import DynamicLoginForm from "@/components/DynamicLoginForm";
import { getApiInstance } from "@/oneentry";

async function LoginPage() {
  const apiInstance = await getApiInstance();
  const loginForm = await apiInstance?.Forms.getFormByMarker("signin");

  return <DynamicLoginForm formEntity={loginForm} />;
}

export default LoginPage;
