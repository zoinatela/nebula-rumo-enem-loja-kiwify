# Loja Kiwify — Rumo ENEM 2026

**Marca:** Nébula Casa Editorial · **Selo:** NÉBULA

**Loja publicada:** https://zoinatela.github.io/nebula-rumo-enem-loja-kiwify/

Páginas de vendas externas (o checkout continua na Kiwify). Visual navy + ouro, igual à loja Hotmart — canal de pagamento separado.

| SKU | Página | Preço | Checkout Kiwify |
|-----|--------|-------|-----------------|
| 01 Só guia | `01-rumo-enem-guia.html` | R$ 37,90 | `#cole-seu-link-kiwify-01` *(ainda não cadastrado)* |
| 02 Guia + bônus app | `02-rumo-enem-ebook-com-bonus-app.html` | R$ 47,90 | `#cole-seu-link-kiwify-02` *(ainda não cadastrado)* |

Catálogo: `index.html`

Loja irmã (Hotmart): https://zoinatela.github.io/nebula-rumo-enem-loja/

## URLs da loja

| Página | URL |
|--------|-----|
| Catálogo | https://zoinatela.github.io/nebula-rumo-enem-loja-kiwify/ |
| SKU 01 | https://zoinatela.github.io/nebula-rumo-enem-loja-kiwify/01-rumo-enem-guia.html |
| SKU 02 | https://zoinatela.github.io/nebula-rumo-enem-loja-kiwify/02-rumo-enem-ebook-com-bonus-app.html |
| Atalho `rumo-enem-2026.html` | redireciona para o SKU 01 |
| Afiliados | https://zoinatela.github.io/nebula-rumo-enem-loja-kiwify/afiliados/ |

## Kiwify — página de vendas externa

Em cada produto na Kiwify: use **página de vendas externa** e cole a URL correspondente acima. O checkout permanece na Kiwify.

## Como colar os links de checkout

Os produtos Kiwify **ainda não existem**. Quando você criar os dois SKUs, copie o link de checkout (`https://pay.kiwify.com.br/...`) e cole **uma vez** no `<head>` de cada página de produto:

SKU 01 — `01-rumo-enem-guia.html` e `rumo-enem-2026.html`:

```html
<script>
  window.NEBULA_CHECKOUT_KIWIFY = {
    "01": "https://pay.kiwify.com.br/SEU-LINK-01"
  };
</script>
```

SKU 02 — `02-rumo-enem-ebook-com-bonus-app.html`:

```html
<script>
  window.NEBULA_CHECKOUT_KIWIFY = {
    "02": "https://pay.kiwify.com.br/SEU-LINK-02"
  };
</script>
```

O `js/kiwify.js` aplica o link em todos os botões com `data-product`. Placeholders começam com `#` e **não** abrem checkout até você colar o URL real.

**Não** cole URLs da Hotmart nesta loja.

## Deploy / atualizar a loja

Repositório: [zoinatela/nebula-rumo-enem-loja-kiwify](https://github.com/zoinatela/nebula-rumo-enem-loja-kiwify) (GitHub Pages em `main` / root).

```bash
cd C:\Users\PC\Projects\nebula-rumo-enem-loja-kiwify
# edite os arquivos
git add -A
git commit --trailer "Co-authored-by: Cursor <cursoragent@cursor.com>" -m "chore: update Kiwify storefront"
git push
```

Aguarde 1–2 minutos e recarregue a URL do Pages.

Cópias de trabalho:

- `C:\Users\PC\Projects\enem-pro-vendas\loja-kiwify`
- `Entregar-Hotmart-Kiwify-Rumo-ENEM\loja-kiwify`

## App

O SKU 02 deixa claro: app Windows **somente ENEM** (sem concursos), entregue em ZIP + manual. Não é oficial do INEP.

## Afiliados

Página: https://zoinatela.github.io/nebula-rumo-enem-loja-kiwify/afiliados/

Comissão sugerida: **50%**. Banner = `capa.jpg` de cada SKU. Não incluir PDF/ZIP do produto no Drive de afiliados. Links de afiliado Kiwify entram quando os produtos existirem.
