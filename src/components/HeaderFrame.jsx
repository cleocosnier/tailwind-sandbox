import Button from "./Btn";

const HeaderFrame = ({ code }) => {
  let state = {
    frame: {
      videoUrl:
        "https://bran-media.canalplus.pro/video/65bbb445dc19e/uploads/media/DEA_BOUCLE_ESSENTIEL_DESKTOP_SANS_APPLETV.mp4",
      titre: "NE CONFIEZ PAS VOTRE IMAGINATION À N'IMPORTE QUI",
      paragraph:
        "Regardez le meilleur des séries, des films et du sport en streaming et en illimité.",
    },
  };

  return (
    <div className="content pt-[64px]">
      <div className="relative">
        <div className="w-full custom-height-frame gradient-filter">
          <video
            autoPlay
            playsInline
            muted
            loop
            className="h-full w-full object-cover"
          >
            <source src={state.frame.videoUrl} type="video/mp4" />
            <p>
              Votre navigateur ne prend pas en charge les vidéos HTML5. Voici
              <a href={state.frame.videoUrl}>
                un lien pour télécharger la vidéo
              </a>
              .
            </p>
          </video>
        </div>
        <div className="absolute w-full h-full left-0 top-0 p-0.5 lg:p-14 flex items-end">
          <div className="max-w-50%">
            <h1 className="text-white uppercase font-bold">
              {state.frame.titre}
            </h1>
            <p className="text-grey mt-3 mb-6">{state.frame.paragraph}</p>
            <Button code={code[0].customCss}>découvrir nos offres</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderFrame;
