const musicData = async () => {
  console.log("fetching")
  try {
    const response = await fetch(
      "https://cors.bridged.cc/https://api.deezer.com/chart"
    );
    const data = await response.json();

    console.log("data", data.playlists);
    console.log(data);
    console.log("fetched");
  } catch (error) {
    const errorMessage = new Error(error.message);
    setError(errorMessage);
  }
};

const initState = {
  tracks: {
    data: [],
    total: 0,
  },
  playlists: {
    data: [],
    total: 0,
  },
  albums: {
    data: [],
    total: 0,
  },
};

const [data, setData] = useState(initState);
const [status, setStatus] = useState("idle");
const [error, setError] = useState("");
const [tracks, setTracks] = useState({});

useEffect(() => {
  const musicData = async () => {
    setStatus("fetching");
    try {
      const response = await fetch(
        "https://cors.bridged.cc/https://api.deezer.com/chart"
      );
      const data = await response.json();

      console.log("data", data.playlists);
      setData(data);
      setStatus("fetched");
    } catch (error) {
      const errorMessage = new Error(error.message);
      setError(errorMessage);
    }
  };

  void musicData();
}, []);