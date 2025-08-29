import React, { useState, useEffect, useRef } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholder?: string
  priority?: boolean
}

export function ImageWithFallback({ 
  src, 
  alt, 
  style, 
  className, 
  placeholder,
  priority = false,
  ...rest 
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  const handleError = () => {
    setDidError(true)
  }

  const handleLoad = () => {
    setIsLoaded(true)
  }

  // Optimizar URLs de Unsplash para mejor rendimiento
  const getOptimizedImageUrl = (url: string) => {
    if (url.includes('unsplash.com')) {
      // Agregar parámetros de optimización de Unsplash
      const separator = url.includes('?') ? '&' : '?'
      return `${url}${separator}auto=format&fit=crop&w=800&q=80`
    }
    return url
  }

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
        </div>
      </div>
    )
  }

  if (!isInView) {
    return (
      <div
        ref={imgRef}
        className={`inline-block bg-gray-200 animate-pulse ${className ?? ''}`}
        style={style}
      >
        {placeholder && (
          <div className="flex items-center justify-center w-full h-full text-gray-400">
            {placeholder}
          </div>
        )}
      </div>
    )
  }

  return (
    <img
      ref={imgRef}
      src={getOptimizedImageUrl(src || '')}
      alt={alt}
      className={`${className ?? ''} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={style}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={handleError}
      onLoad={handleLoad}
      {...rest}
    />
  )
}
