import { dummyRequests } from "../data/dummyRequest"

export default function calculateTotalRequest(category = 'all'){
  let totalCount = 0
  if(category !== 'all'){
    totalCount = dummyRequests.filter(req => req.status === category).length
  }else{
    totalCount = dummyRequests.length
  }
  return totalCount
}