import axios from "axios";

export async function getData() {
  try {
    // Using axios to make API call
    const response = await axios
      .get(`${process.env.API_URL}`)
      .then((res) => res); // Replace with your actual API URL

    // Accessing the actual data from response.data
    return { tickets: response.data.tickets, users: response.data.users };
  } catch (error) {
    console.error("Error fetching data", error);
    return { tickets: [], users: [] }; // Return empty arrays in case of an error to avoid crashes
  }
}
