const BASE_URL = "http://localhost:8080/api/agenda"
const REGISTRO_ENDPOINT = "/registro"

export const getRegisters = async (filter = "") => {
  const response = await fetch(`${BASE_URL}${REGISTRO_ENDPOINT}${filter}`)
  const result = await response.json()
  return result
}

export const postRegister = async (registro) => {
  const response = await fetch(`${BASE_URL}${REGISTRO_ENDPOINT}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registro),
  })
  const result = await response.json()
  return result
}

export const deleteRegister = async (id) => {
  const response = await fetch(`${BASE_URL}${REGISTRO_ENDPOINT}/${id}`, {
    method: "DELETE",
  })
  const status = response.status
  return status
}

export const putRegister = async (id, registro) => {
  const response = await fetch(`${BASE_URL}${REGISTRO_ENDPOINT}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registro),
  })
  const result = await response.json()
  return result
}
