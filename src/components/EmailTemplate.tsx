import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        backgroundColor: '#f4f4f5',
        padding: '32px 16px',
      }}
    >
      <table
        role="presentation"
        width="100%"
        cellPadding={0}
        cellSpacing={0}
        style={{ maxWidth: '560px', margin: '0 auto' }}
      >
        <tbody>
          {/* Header */}
          <tr>
            <td
              style={{
                backgroundColor: '#000000',
                padding: '24px 32px',
                borderRadius: '8px 8px 0 0',
              }}
            >
              <h1
                style={{
                  color: '#ffffff',
                  fontSize: '18px',
                  margin: 0,
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                }}
              >
                Nova mensagem de contacto
              </h1>
            </td>
          </tr>

          {/* Body */}
          <tr>
            <td
              style={{
                backgroundColor: '#ffffff',
                padding: '32px',
                border: '1px solid #e4e4e7',
                borderTop: 'none',
              }}
            >
              <p style={{ fontSize: '14px', color: '#71717a', margin: '0 0 4px' }}>
                Nome
              </p>
              <p style={{ fontSize: '16px', color: '#18181b', margin: '0 0 20px', fontWeight: 500 }}>
                {name}
              </p>

              <p style={{ fontSize: '14px', color: '#71717a', margin: '0 0 4px' }}>
                Email
              </p>
              <p style={{ fontSize: '16px', margin: '0 0 20px' }}>
                <a href={`mailto:${email}`} style={{ color: '#18181b', textDecoration: 'none', fontWeight: 500 }}>
                  {email}
                </a>
              </p>

              <p style={{ fontSize: '14px', color: '#71717a', margin: '0 0 4px' }}>
                Mensagem
              </p>
              <p
                style={{
                  fontSize: '15px',
                  color: '#18181b',
                  lineHeight: '1.6',
                  margin: 0,
                  whiteSpace: 'pre-wrap',
                  backgroundColor: '#f4f4f5',
                  padding: '16px',
                  borderRadius: '6px',
                }}
              >
                {message}
              </p>
            </td>
          </tr>

          {/* Footer */}
          <tr>
            <td
              style={{
                padding: '20px 32px',
                textAlign: 'center' as const,
              }}
            >
              <p style={{ fontSize: '12px', color: '#a1a1aa', margin: 0 }}>
                Esta mensagem foi enviada através do formulário de contacto do site.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}