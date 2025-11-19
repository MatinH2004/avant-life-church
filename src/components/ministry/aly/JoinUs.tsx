import Button from "@/components/ui/Button";

export default function JoinUs() {
  return (
    <div>
      <h2 className="text-center text-gray-800 text-3xl font-semibold my-4">Join Us</h2>
      <div className="px-6 flex flex-col justify-center items-center gap">
        <p
          className="text-center text-xl font-semibold text-gray-700"
        >
          Every Wednesday. 7:00PM to 9:00PM
        </p>
        <p
          className="text-center text-lg font-medium text-gray-700"
        >
          4840 Capilano Road
        </p>
        <div className="py-4">
          <Button
            text="NORTH SHORE CAMPUS"
            href="/northshore"
            bg="black"
            bold={true}
          />
        </div>
      </div>
    </div>
  );
}