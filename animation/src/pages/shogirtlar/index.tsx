const Students = () => {
  return (
    <div className="flex items-center flex-col justify-around gap-[30px] ">
      <div className="bg2 w-[100%] h-[300px]">Shogirtlar ijodidan</div>
      <div className="w-[80%] flex flex-col gap-4">
        <video className=" h-[500px]" controls>
          <source src="/src/assets/videos/Husanjon-24.mp4" />
        </video>
        <video className=" h-[500px]" controls>
          <source src="/src/assets/videos/Doniyor-13.mp4" />
        </video>
        <video className=" h-[500px]" controls>
          <source src="/src/assets/videos/Doniyor-17.mp4" />
        </video>
      </div>
    </div>
  );
};

export default Students;
