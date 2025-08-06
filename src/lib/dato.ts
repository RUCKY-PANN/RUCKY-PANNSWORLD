// src/lib/dato.ts
import { request } from 'graphql-request'

const endpoint = 'https://graphql.datocms.com/'
const token = import.meta.env.DATOCMS_API_TOKEN

export async function getAreaInfo() {
  const query = `
    query {
      areaInfo {
        areaName
        eventName
      }
    }
  `
  const data = await request(endpoint, query, {}, {
    Authorization: `Bearer ${token}`
  })
  return data
}