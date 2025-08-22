'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/AuthContext'
import { Box, CircularProgress, Container, Typography } from '@mui/material'

export default function Home() {
  const router = useRouter()
  const { isAuthenticated, loading } = useAuth()

  useEffect(() => {
    if (!loading) {
      if (isAuthenticated) {
        router.push('/dashboard')
      } else {
        router.push('/login')
      }
    }
  }, [isAuthenticated, loading, router])

  return (
    <Container maxWidth="sm">
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          justifyContent: 'center', 
          minHeight: '100vh'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Feature Flag Management
        </Typography>
        <CircularProgress />
      </Box>
    </Container>
  )
}
