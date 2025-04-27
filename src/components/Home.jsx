import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const Schema = z.object({
  team: z.string().min(1, 'Please select a school'),
});

function Home() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(Schema),
    defaultValues: { team: '' },
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    navigate('/schedule/' + encodeURIComponent(data.team));
  };

  return (
    <main className="flex flex-col items-center mt-10">
      <h1 className="text-5xl text-blue-400 mb-15">2025-2026 Big Ten Football Matchups</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <label htmlFor="team-select" className="block text-2xl text-blue-400 mb-10">
          Select a Big Ten School
        </label>
        <select
          id="team-select"
          {...register('team')}
          className={`w-full p-2 bg-gray-200 text-lg rounded mb-2 ${errors.team ? 'border-red-500 border' : ''}`}
        >
          <option value="">-- Choose a school --</option>
          <option value="Illinois">Illinois - University of Illinois</option>
          <option value="Indiana">Indiana - Indiana University</option>
          <option value="Iowa">Iowa - University of Iowa</option>
          <option value="Maryland">Maryland - University of Maryland</option>
          <option value="Michigan">Michigan - University of Michigan</option>
          <option value="Michigan State">Michigan State - Michigan State University</option>
          <option value="Minnesota">Minnesota - University of Minnesota</option>
          <option value="Nebraska">Nebraska - University of Nebraska</option>
          <option value="Northwestern">Northwestern - Northwestern University</option>
          <option value="Ohio State">Ohio State - Ohio State University</option>
          <option value="Penn State">Penn State - Pennsylvania State University</option>
          <option value="Purdue">Purdue - Purdue University</option>
          <option value="Rutgers">Rutgers - Rutgers University</option>
          <option value="Wisconsin">Wisconsin - University of Wisconsin</option>
        </select>
        {errors.team && <p className="text-red-500 mb-10">{errors.team.message}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-blue-400 text-white text-xl rounded hover:bg-blue-500 disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting…' : 'Get 2025-2026 Season Schedule'}
        </button>
      </form>
    </main>
  );
}

export default Home;