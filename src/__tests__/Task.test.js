import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Task from "../components/Task"; // Update the import path as needed

test("is removed from the list when the delete button is clicked", async () => {
  // Create a mock onDelete function
  const onDeleteMock = jest.fn();

  // Define a sample task object
  const sampleTask = {
    category: "Sample Category",
    text: "Sample Text",
  };

  // Render the Task component with the task and onDeleteMock function
  render(<Task task={sampleTask} onDelete={onDeleteMock} />);

  // Find the delete button and simulate a click event
  const deleteButton = screen.getByText("X");
  fireEvent.click(deleteButton);

  // Optionally, wait for DOM updates if needed
  await screen.findByText("Sample Text");

  // Verify that the onDeleteMock function was called
  expect(onDeleteMock).toHaveBeenCalledWith(sampleTask);
});
