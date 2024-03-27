import Button from "@/components/UI/Button";
import Switch from "@/components/UI/Switch";

const Notifications = () => {
  const checkBoxes = [
    { name: "newMessages", label: "Nouveau message" },
    { name: "newComments", label: "Nouveau commentaire" },
    { name: "newLikes", label: "Nouveau like" },
    { name: "newFollowers", label: "Nouveau abonné" },
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
          <div key={checkBox.name} className="flex flex-row items-center gap-4">
            <Switch id={checkBox.name} name={checkBox.name} />
            <p>{checkBox.label}</p>
          </div>
        ))}
        <Button type="submit" className="w-fit p-2">
          Valider
        </Button>
      </form>
    </section>
  );
};

export default Notifications;
