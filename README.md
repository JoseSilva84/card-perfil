# 💼 Card de Perfil Interativo – Componente Moderno de Perfil

Um elegante e acessível **card de perfil animado**, desenvolvido com **Next.js**, **Tailwind CSS** e **Framer Motion**.  
O componente exibe informações de usuário, estatísticas e botões de interação (“Seguir” e “Mensagem”) com comportamento dinâmico e responsivo.

---

## 🚀 Tecnologias Utilizadas

- ⚡ **Next.js 14+**
- 🎨 **Tailwind CSS**
- 🎬 **Framer Motion**
- ♿ **Acessibilidade (ARIA Labels, Focus States)**
- 💻 **React Hooks (useState)**

---

## 📸 Demonstração

| Estado Padrão | Estado Seguindo |
|----------------|----------------|
| ![Perfil padrão](https://via.placeholder.com/250x300?text=Perfil) | ![Perfil seguindo](https://via.placeholder.com/250x300?text=Seguindo) |

---

## 🧠 Recursos

✅ Exibição de nome, cargo e biografia  
✅ Contadores dinâmicos de **seguidores, seguindo e projetos**  
✅ Botão “Seguir” com **mudança de estado e animação suave**  
✅ Ícone de confirmação (✔️) quando o usuário está seguindo  
✅ Botão “Mensagem” com link externo configurável  
✅ Design totalmente responsivo e acessível  
✅ **Animação de entrada** com *Framer Motion*  
✅ Cores com **gradiente linear** inspiradas em tons de roxo (#667EEA → #764BA2)

---

## 📦 Estrutura do Projeto

src/
├── components/
│ ├── ProfileCard.tsx # Componente principal
│ ├── ProfileStats.tsx # Estatísticas de seguidores/seguindo/projetos
│
├── public/
│ └── jno.jpg # Imagem do perfil (exemplo)
│
└── app/
└── page.tsx # Página principal que importa o componente

🎯 Acessibilidade (ARIA + Focus States)
Este componente foi projetado com boas práticas de acessibilidade:
Todos os botões possuem aria-label descritivo.
Ícones são marcados como aria-hidden="true".
Estados de foco e de clique possuem focus:ring visual claro.
A região principal possui role="region" e aria-label dinâmico com o nome do usuário.

👨‍💻 Autor
José Silva
🔗 Linktree
💼 Desenvolvedor Full Stack | Criador de experiências digitais incríveis.