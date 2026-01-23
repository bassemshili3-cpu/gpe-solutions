"use client";

import { useMemo, useState } from "react";
import { useFormState } from "react-dom";

type FormState = {
  raisonSociale: string;
  effectif: string;
  email: string;
  telephone: string;
  message: string;
};

const MAX_MESSAGE = 2000;

function validateEmail(email: string) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function validateFrenchPhone(phone: string) {
  const cleaned = phone.replace(/[\s.\-]/g, "");
  return /^(?:(?:\+|00)33|0)[1-9](?:\d{8})$/.test(cleaned);
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    raisonSociale: "",
    effectif: "",
    email: "",
    telephone: "",
    message: "",
  });

  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "loading" }
    | { type: "success"; msg: string }
    | { type: "error"; msg: string }
  >({ type: "idle" });

  const messageCount = form.message.length;

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};

    if (!form.raisonSociale.trim()) e.raisonSociale = "Champ obligatoire.";
    if (!form.effectif.trim()) e.effectif = "Champ obligatoire.";

    if (!form.email.trim()) e.email = "Champ obligatoire.";
    else if (!validateEmail(form.email)) e.email = "Email invalide.";

    if (!form.telephone.trim()) e.telephone = "Champ obligatoire.";
    else if (!validateFrenchPhone(form.telephone)) e.telephone = "Numéro invalide.";

    if (!form.message.trim()) e.message = "Champ obligatoire.";
    else if (form.message.length > MAX_MESSAGE) e.message = "Message trop long.";

    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: "idle" });

    if (!isValid) {
      setStatus({ type: "error", msg: "Vérifiez les champs en rouge." });
      return;
    }

    try {
      setStatus({ type: "loading" });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Erreur serveur");
      }

      setStatus({
        type: "success",
        msg: "Merci ! Votre demande a bien été envoyée. Nous revenons vers vous rapidement.",
      });

      setForm({
        raisonSociale: "",
        effectif: "",
        email: "",
        telephone: "",
        message: "",
      });
    } catch {
      setStatus({
        type: "error",
        msg: "Impossible d’envoyer pour le moment. Réessayez dans quelques minutes.",
      });
    }
  }

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const inputBase =
    "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition " +
    "placeholder:text-slate-400 " +
    "focus:border-blue-500 focus:ring-4 focus:ring-blue-200/60";

  const labelBase = "block text-xs font-semibold text-slate-700 mb-2";
  const hintBase = "mt-2 text-xs text-slate-500";
  const errorBase = "mt-2 text-xs text-red-600";

  return (
    <form
      onSubmit={onSubmit}
      className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-8 shadow-[0_20px_60px_rgba(2,6,23,0.10)] md:p-10"
    >
      {/* petit halo discret */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-transparent blur-3xl" />

      <div className="relative">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Raison sociale */}
          <div>
            <label className={labelBase} htmlFor="raisonSociale">
              Raison sociale <span className="text-red-500">*</span>
            </label>
            <input
              id="raisonSociale"
              name="raisonSociale"
              type="text"
              value={form.raisonSociale}
              onChange={(e) => setField("raisonSociale", e.target.value)}
              placeholder="Nom de votre entreprise"
              className={`${inputBase} ${
                errors.raisonSociale ? "border-red-300 focus:border-red-500 focus:ring-red-200/60" : "border-slate-200"
              }`}
              autoComplete="organization"
            />
            {errors.raisonSociale ? (
              <p className={errorBase}>{errors.raisonSociale}</p>
            ) : (
              <p className={hintBase}>Ex: SARL Dupont, SAS Martin…</p>
            )}
          </div>

            {/* Effectif */}
<div>
  <label className={labelBase} htmlFor="effectif">
    Effectif <span className="text-red-500">*</span>
  </label>

  <input
    type="number"
    id="effectif"
    name="effectif"
    placeholder="Ex : 12"
    min="1"
    value={form.effectif}
    onChange={(e) => setField("effectif", e.target.value)}
    className={`${inputBase} ${
      errors.effectif
        ? "border-red-300 focus:border-red-500 focus:ring-red-200/60"
        : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
    }`}
  />

  {errors.effectif ? (
    <p className={errorBase}>{errors.effectif}</p>
  ) : (
    <p className={hintBase}>Indiquez le nombre de salariés dans votre entreprise.</p>
  )}
</div>

          {/* Email */}
          <div>
            <label className={labelBase} htmlFor="email">
              Adresse email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              placeholder="votre.email@exemple.fr"
              className={`${inputBase} ${
                errors.email ? "border-red-300 focus:border-red-500 focus:ring-red-200/60" : "border-slate-200"
              }`}
              autoComplete="email"
            />
            {errors.email ? (
              <p className={errorBase}>{errors.email}</p>
            ) : (
              <p className={hintBase}>Nous ne partageons jamais vos données.</p>
            )}
          </div>

          {/* Téléphone */}
          <div>
            <label className={labelBase} htmlFor="telephone">
              Téléphone <span className="text-red-500">*</span>
            </label>
            <input
              id="telephone"
              name="telephone"
              type="tel"
              value={form.telephone}
              onChange={(e) => setField("telephone", e.target.value)}
              placeholder="06 12 34 56 78"
              className={`${inputBase} ${
                errors.telephone ? "border-red-300 focus:border-red-500 focus:ring-red-200/60" : "border-slate-200"
              }`}
              autoComplete="tel"
            />
            {errors.telephone ? (
              <p className={errorBase}>{errors.telephone}</p>
            ) : (
              <p className={hintBase}>Format FR (mobile ou fixe).</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="mt-6">
          <label className={labelBase} htmlFor="message">
            Votre message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={(e) => setField("message", e.target.value.slice(0, MAX_MESSAGE))}
            placeholder="Parlez-nous de vos besoins (convention, DSN, volume, outils, délais...)"
            className={`${inputBase} resize-none ${
              errors.message ? "border-red-300 focus:border-red-500 focus:ring-red-200/60" : "border-slate-200"
            }`}
          />
          <div className="mt-2 flex items-center justify-between">
            <p className={errors.message ? errorBase : hintBase}>
              {errors.message ? errors.message : "Plus vous êtes précis, plus la réponse sera rapide."}
            </p>
            <p className="text-xs text-slate-500">
              {messageCount}/{MAX_MESSAGE}
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="mt-6">
          {status.type === "error" ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {status.msg}
            </div>
          ) : null}

          {status.type === "success" ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              {status.msg}
            </div>
          ) : null}
        </div>

        {/* Submit */}
        <div className="mt-8">
          <button
            type="submit"
            disabled={status.type === "loading"}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-700 px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 active:scale-[0.99]"
          >
            {status.type === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
            <span className="transition group-hover:translate-x-0.5">→</span>
          </button>

          <p className="mt-4 text-center text-xs text-slate-500">
            En envoyant ce formulaire, vous acceptez que nous vous recontactions au sujet de votre demande.
          </p>
        </div>
      </div>
    </form>
  );
}

