const UserForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          required
          value={data.name || ""}
          onChange={(e) => {
            updateFieldHandler("name", e.target.value);
          }}
        />
      </div>

      <div className="form-control">
        <label htmlFor="eamil">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu Email"
          required
          value={data.email || ""}
          onChange={(e) => {
            updateFieldHandler("email", e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default UserForm;
