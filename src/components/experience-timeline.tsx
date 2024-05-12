import { Divider } from "@nextui-org/react";

interface Props {
  jobs: {
    time: string;
    title: string;
    company: string;
    description: string[];
  }[];
}

export default function ExperienceTimeline({ jobs }: Props) {
  return (
    <div className="relative flex flex-col gap-10 max-w-[450px]">
      <Divider
        orientation="vertical"
        className="absolute top-0 left-[3px] z-0"
      />
      {jobs.map((job, index) => (
        <div
          key={`job_${index}`}
          className="py-2 flex flex-col items-start justify-start"
        >
          <div className="text-opacity-50 flex items-center gap-4 text-small">
            <div className="size-2 rounded-full bg-primary-700"></div>
            <span>{job.time}</span>
          </div>
          <div className="pl-6 flex flex-col items-start">
            <h3 className="text-primary-700 font-medium text-lg lg:text-xl">
              {job.title}
            </h3>
            <p className="text-content4 text-small font-ubuntu">
              {job.company}
            </p>
            <ul className="pl-6 space-y-3 mt-3">
              {job.description.map((desc, idx) => (
                <li
                  key={`job_${index}_desc_${idx}`}
                  className="list-disc font-ubuntu text-small"
                >
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
