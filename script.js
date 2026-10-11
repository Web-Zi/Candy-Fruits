(() => {
  "use strict";

  const d = window.CANDY_FRUITS_MENU;
  if (!d) return;

  const $ = selector => document.querySelector(selector);

  let active = "all";
  let timer;

  const icons = {
    "sory-fries": "🥙",
    betenko: "🍕",
    "potato-classic": "🥙",
    potato: "🍟",
    "potato-burger": "🌯",
    galabito: "🥪",
    extras: "🥫",
    toast: "🍞",
    combo: "🍟"
  };

  const esc = s =>
    String(s).replace(/[&<>"']/g, c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[c]));

  const cat = id =>
    d.categories.find(c => c.id === id)?.name || "Menu";

  function toast(message) {
    $("#toast").textContent = message;
    $("#toast").classList.add("show");

    clearTimeout(timer);

    timer = setTimeout(() => {
      $("#toast").classList.remove("show");
    }, 2200);
  }

  function pills() {
    const arr = [
      { id: "all", name: "All items" },
      ...d.categories
    ];

    $("#categoryPills").innerHTML = arr.map(c => `
      <button
        class="category-pill ${active === c.id ? "active" : ""}"
        data-cat="${c.id}">
        ${esc(c.name)}
      </button>
    `).join("");

    $("#categoryPills").querySelectorAll("button").forEach(b => {
      b.onclick = () => {
        active = b.dataset.cat;
        pills();
        render();
      };
    });
  }

  function card(p) {
    const isToast = p.small != null;

    return `
      <article class="product-card">
        <div class="product-top">
          <span class="product-icon">
            ${icons[p.category] || "🍴"}
          </span>
          <span class="category-tag">
            ${esc(cat(p.category))}
          </span>
        </div>

        <h3>${esc(p.nameEn || p.name)}</h3>

        <div class="arabic-name" lang="ar" dir="rtl">
          ${esc(p.name)}
        </div>

        ${p.uncertain
          ? '<span class="check-name">Check name against original</span>'
          : ""
        }

        <div class="price-row">
          ${isToast
            ? `
              <div class="toast-prices">
                <button class="size-price"
                  data-size="Small"
                  data-price="${p.small}">
                  S · ${p.small} EGP
                </button>

                <button class="size-price"
                  data-size="Large"
                  data-price="${p.large}">
                  L · ${p.large} EGP
                </button>
              </div>
            `
            : `
              <span class="price">
                ${p.price}
                <span class="currency">EGP</span>
              </span>
            `
          }
        </div>
      </article>
    `;
  }

  function render() {
    const query = $("#searchInput")
      .value.trim().toLocaleLowerCase();

    const all = [...d.products, ...d.toasts];

    const filtered = all.filter(p =>
      (active === "all" || active === p.category) &&
      `${p.name} ${p.nameEn} ${cat(p.category)}`
        .toLocaleLowerCase()
        .includes(query)
    );

    $("#menuGrid").innerHTML = filtered.map(card).join("");

    $("#itemCount").textContent = filtered.length;
    $("#emptyState").hidden = !!filtered.length;

    $("#menuGrid").querySelectorAll(".size-price")
      .forEach(button => {
        button.onclick = () => {
          toast(
            `${button.dataset.size} selected — ` +
            `${button.dataset.price} EGP`
          );
        };
      });
  }

  $("#searchInput").addEventListener("input", render);

  $("#clearSearch").onclick = () => {
    $("#searchInput").value = "";
    active = "all";
    pills();
    render();
    $("#searchInput").focus();
  };

  $("#themeToggle").onclick = () => {
    const dark = document.body.classList.toggle("dark");

    $("#themeToggle").innerHTML = dark
      ? "☀ <span>Light mode</span>"
      : "☾ <span>Dark mode</span>";
  };

  $("#heroCall").href = `tel:${d.brand.phone}`;

  $("#contactActions").innerHTML = `
    <a class="contact-btn" href="tel:${d.brand.phone}">
      ☎ ${d.brand.phone}
    </a>

    <a class="contact-btn secondary" href="tel:${d.brand.phoneAlt}">
      ☎ ${d.brand.phoneAlt}
    </a>
  `;

  $("#address").textContent = "⌖ " + d.brand.address;
  $("#year").textContent = new Date().getFullYear();

  pills();
  render();
})();
