import { toast } from "react-toastify";

function handleNetworkError(error) {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 499;

  if (!expectedError) {
    toast.error(`${error.name}: ${error.message}`);
    return;
  }

  const { name, message } = error.response.data;
  toast.warning(`${name}: ${message}`);
}

export default {
  handleNetworkError,
};
