{
  /*select type*/
}
<div className="form-group">
  <label htmlFor="type">room type</label>
  <select
    name="type"
    id="type"
    value={type}
    className="form-control"
    onChange={handleChange}
  >
    {types}
  </select>
</div>;
{
  /* end select type*/
}
{
  /*guest */
}
<div className="form-group">
  <label htmlFor="capacity">Guests</label>
  <select
    name="capacity"
    id="capacity"
    value={capacity}
    className="form-control"
    onChange={handleChange}
  >
    {people}
  </select>
</div>;
{
  /* end guest*/
}
