function RapportVet({ rapports }) {
  return (
    <div className="space-y-4">
      {rapports.map((rapport) => (
        <div
          key={rapport.id}
          className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {/* En-tête de la carte */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">{rapport.etat}</h2>
            <span className="text-sm text-gray-500">
              Animal ID: {rapport.animal.id}
            </span>
          </div>

          {/* Détails du rapport */}
          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="font-medium">Nourriture:</span> {rapport.nourriture}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Date du passage:</span>{" "}
              {new Date(rapport.passage_Date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RapportVet;