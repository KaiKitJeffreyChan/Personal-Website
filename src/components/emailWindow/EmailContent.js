import React from "react";
import "./Email.css";

const EmailContent = () => {
  return (
    <form>
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Name"
          name="name"
          id="name"
          required
        />
        <label for="name" class="form__label">
          To:
        </label>
      </div>
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Name"
          name="name"
          id="name"
          required
        />
        <label for="name" class="form__label">
          Subject:
        </label>
      </div>
    </form>
  );
};

export default EmailContent;
