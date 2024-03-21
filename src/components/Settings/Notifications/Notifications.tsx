import Button from "@/components/UI/Button";

const Notifications = () => {
  const checkBoxes = [
    { id: 1, name: "newMessages", label: "Nouveau message" },
    { id: 2, name: "newComments", label: "Nouveau commentaire" },
    { id: 3, name: "newLikes", label: "Nouveau like" },
    { id: 4, name: "newFollowers", label: "Nouveau abonné" },
  ];

  return (
    <section className="flex flex-row gap-10 py-10 pl-8">
      <div className="w-1/3">
        <h1 className="text-xl font-bold">Notifications</h1>
        <p className="text-gray-500">
          Mettez à jour vos préférences de notifications.
        </p>
      </div>
      <form className="flex w-[484px] flex-col gap-8">
        {checkBoxes.map((checkBox) => (
          <div key={checkBox.id} className="flex flex-row items-center gap-4">
            <label className="switch flex flex-row">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            <p>{checkBox.label}</p>
          </div>
        ))}
        <Button value="Valider" type="submit" className="w-fit p-2" />
      </form>
    </section>
  );
};

export default Notifications;
