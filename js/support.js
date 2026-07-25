(function () {
  function getMessages() {
    const lang = document.documentElement.getAttribute("lang") || "en";
    if (lang === "ru") {
      return {
        copied: "Скопировано",
        failed: "Не удалось скопировать",
      };
    }

    return {
      copied: "Copied",
      failed: "Copy failed",
    };
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    const input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "absolute";
    input.style.left = "-9999px";
    document.body.appendChild(input);
    input.select();

    try {
      return document.execCommand("copy");
    } finally {
      document.body.removeChild(input);
    }
  }

  function showState(button, text, isError) {
    const previous = button.dataset.label || button.textContent;
    button.dataset.label = previous;
    button.textContent = text;
    button.classList.toggle("is-copied", !isError);
    button.classList.toggle("is-error", isError);

    window.clearTimeout(button._supportResetTimer);
    button._supportResetTimer = window.setTimeout(() => {
      button.textContent = button.dataset.label || previous;
      button.classList.remove("is-copied", "is-error");
    }, 1400);
  }

  function bindCopyButtons() {
    const messages = getMessages();

    document.querySelectorAll(".support-copy").forEach((button) => {
      if (button.dataset.bound === "1") return;
      button.dataset.bound = "1";

      button.addEventListener("click", async () => {
        try {
          const ok = await copyText(button.dataset.copy || button.textContent || "");
          showState(button, ok ? messages.copied : messages.failed, !ok);
        } catch (error) {
          showState(button, messages.failed, true);
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", bindCopyButtons);
  document.addEventListener("bookimp:content-loaded", bindCopyButtons);
})();
