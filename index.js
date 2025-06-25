const net = require('net');
const express = require('express');
const app = express();

const PRINTER_IP = '192.168.1.200';
const PRINTER_PORT = 9100;

const gerarComandaSushi = () => {
  return `
  🥢 Pedido de Sushi 🥢
  -------------------------
  Mesa: 12
  Cliente: João S.
  -------------------------
  - 2x Temaki Salmão
  - 1x Hot Roll Especial
  - 1x Coca-Cola 350ml
  -------------------------
  Total: €18,50
  Hora: ${new Date().toLocaleTimeString()}
  -------------------------
  Obrigado pela preferência!
  `;
};

app.get('/imprimir', (req, res) => {
  const client = new net.Socket();
  const texto = gerarComandaSushi();

  client.connect(PRINTER_PORT, PRINTER_IP, () => {
    client.write('\x1B\x74\x02');       // Codificação CP850 (Português)
    client.write(texto);               // Texto do pedido
    client.write('\n\n\n\n');          // Espaço antes do corte
    client.write('\x1D\x56\x00');      // Corte de papel
    client.end();
    res.send('🖨️ Pedido enviado para a impressora!');
  });

  client.on('error', (err) => {
    console.error('Erro ao conectar na impressora:', err.message);
    res.status(500).send('Erro ao conectar na impressora.');
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/imprimir');
});
