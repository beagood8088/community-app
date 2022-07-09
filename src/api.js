export const getAllPosts = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/posts`);

  if (!response.ok) {
    throw new Error("Something went wrong.");
  }
  
  return response.json();
};

export const getAllTopics = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/topics`);

  if (!response.ok) {
    throw new Error("Something went wrong.");
  }
  
  return response.json();
};