import offices from '@/app/offices.json'

export async function GET() {
  
  return Response.json(offices)
}