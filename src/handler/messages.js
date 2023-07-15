export const success = (message, content) => {
  message.open({
    type: "success",
    content: content,
  })
}

export const error = (message, content) => {
  message.open({
    type: "error",
    content: content,
  })
}
