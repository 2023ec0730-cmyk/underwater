# UWARL Database Integration Guide

This comprehensive guide will walk you through integrating the website with your Supabase database. All dummy data has been removed from the code and now lives in the database.

---

## 📋 Overview

The website now uses **Supabase** as the backend database with the following architecture:
- **Data Fetching**: SWR hooks (`useLabData.ts`) for client-side data fetching
- **Database Client**: Supabase client configured in `lib/supabaseClient.ts`
- **Type Safety**: TypeScript interfaces defined in `types/database.ts`
- **Security**: Row Level Security (RLS) enabled for all tables

---

## 🚀 Step-by-Step Integration

### Step 1: Create Supabase Project

1. Go to [Supabase](https://supabase.com) and sign in/sign up
2. Click **"New Project"**
3. Fill in:
   - **Name**: UWARL Lab Website
   - **Database Password**: Choose a secure password (save it!)
   - **Region**: Select closest to your users
4. Click **"Create new project"** and wait 2-3 minutes for setup

---

### Step 2: Run Database Schema Script

1. In your Supabase dashboard, navigate to **SQL Editor** (left sidebar)
2. Click **"New Query"**
3. Open the file `scripts/01-initial-schema.sql` from your project
4. Copy the entire contents and paste into the SQL Editor
5. Click **"Run"** (or press `Ctrl+Enter`)
6. You should see: ✅ **"Success. No rows returned"**

**What this does:**
- Creates 8 tables (lab_info, pi_profile, research_areas, projects, publications, students, facilities, gallery_items)
- Enables Row Level Security (RLS) on all tables
- Creates public read-only policies (visitors can view but not modify data)

---

### Step 3: Seed the Database with Dummy Data

1. In the SQL Editor, click **"New Query"** again
2. Open the file `scripts/02-seed-data.sql` from your project
3. Copy the entire contents and paste into the SQL Editor
4. Click **"Run"** (or press `Ctrl+Enter`)
5. You should see: ✅ **"Success. Rows returned"** with counts

**What this does:**
- Populates all tables with realistic dummy data
- Includes lab info, PI profile, 6 research areas, 3 projects, 3 publications, 5 students, 3 facilities, and 6 gallery items

---

### Step 4: Get Your Supabase Credentials

1. In your Supabase dashboard, go to **Settings** (gear icon) → **API**
2. Find these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public key** (long string starting with `eyJ...`)
3. Copy both values

---

### Step 5: Add Environment Variables

#### Option A: Deploy on Vercel (Recommended)
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these two variables:
   - Key: `NEXT_PUBLIC_SUPABASE_URL` | Value: Your Project URL
   - Key: `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Value: Your anon public key
4. Click **Save**
5. Redeploy your site (Vercel will do this automatically or you can trigger manually)

#### Option B: Local Development
1. Create a `.env.local` file in the root of your project
2. Add these lines:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
   ```
3. Save the file
4. Restart your dev server (`npm run dev`)

---

### Step 6: Verify the Integration

1. Open your website (locally or on Vercel)
2. Navigate through all pages:
   - **Home**: Should show 6 research areas
   - **Research**: Should show 3 projects with filtering
   - **Publications**: Should show 3 publications with search
   - **Team**: Should show PI and 5 students
   - **Facilities**: Should show 3 facilities with category filter
   - **Gallery**: Should show 6 images with category filter
3. If data appears, congratulations! ✅ Integration complete.

---

## 🔧 How the Code Works

### Data Fetching Hooks
All pages use centralized hooks from `hooks/useLabData.ts`:

```tsx
import { useResearchAreas, useProjects, usePublications } from '@/hooks/useLabData'

// In your component:
const { researchAreas, isLoading } = useResearchAreas()
const { projects, error } = useProjects()
const { publications } = usePublications()
```

### Supabase Client
The client is configured in `lib/supabaseClient.ts`:
```tsx
import { supabase } from '@/lib/supabaseClient'

// Fetch data directly:
const { data, error } = await supabase.from('projects').select('*')
```

---

## 📝 Managing Your Data

### Adding New Content

#### Via Supabase Dashboard (Easiest)
1. Go to **Table Editor** in Supabase dashboard
2. Select a table (e.g., `publications`)
3. Click **"Insert row"**
4. Fill in the fields
5. Click **Save**
6. Refresh your website to see the new content

#### Via SQL (Advanced)
```sql
INSERT INTO publications (title, authors, venue, year, type, highlight)
VALUES ('New Paper Title', 'Author Names', 'Conference Name', 2024, 'conference', false);
```

### Updating Content
1. Go to **Table Editor**
2. Find the row you want to edit
3. Click on the cell to edit
4. Make your changes
5. Changes appear instantly on the website (SWR will refetch)

### Deleting Content
1. Go to **Table Editor**
2. Select the row(s)
3. Click **Delete**
4. Confirm deletion

---

## 🔐 Security Notes

### Row Level Security (RLS)
All tables have RLS enabled with policies that allow:
- ✅ **Public READ access** (anyone can view)
- ❌ **No PUBLIC WRITE access** (only authenticated users with proper roles can modify)

### Admin Access
To modify data through the API (not just the dashboard), you would need to:
1. Set up Supabase Auth
2. Create admin roles
3. Update RLS policies for INSERT/UPDATE/DELETE

**For now, manage all content through the Supabase Dashboard.**

---

## 🎨 Customizing Data

### Update Lab Information
Edit the single row in the `lab_info` table to change:
- Lab name and tagline
- Hero image
- Contact email

### Update PI Profile
Edit the single row in the `pi_profile` table to change:
- Name, title, affiliation
- Bio
- Profile image
- Social links

### Upload Images
For images:
1. Go to **Storage** in Supabase dashboard
2. Create a bucket called `public-images`
3. Upload your images
4. Copy the public URL
5. Use that URL in your database records (e.g., `image_url` field)

---

## 🐛 Troubleshooting

### Issue: Website shows loading spinner forever
**Solution:** Check that:
- Environment variables are set correctly
- Supabase project is active (not paused)
- You ran both SQL scripts (schema + seed data)

### Issue: "Invalid API key" error
**Solution:**
- Double-check your `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Make sure there are no extra spaces or quotes
- Verify the key is the "anon public" key, not the service role key

### Issue: No data showing on pages
**Solution:**
- Verify data exists in Supabase Table Editor
- Check browser console for errors
- Ensure RLS policies are created (run schema script again if needed)

### Issue: RLS policy error
**Solution:**
- Go to **Authentication** → **Policies** in Supabase
- Verify each table has a "Public Read Access" policy
- Re-run the schema script if policies are missing

---

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [SWR Documentation](https://swr.vercel.app/)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

---

## ✅ Checklist

Before going live, make sure you've completed:

- [ ] Created Supabase project
- [ ] Ran `01-initial-schema.sql` script
- [ ] Ran `02-seed-data.sql` script
- [ ] Added environment variables to Vercel/local
- [ ] Verified all pages show data correctly
- [ ] Customized lab info and PI profile
- [ ] Uploaded your own images (optional)
- [ ] Replaced dummy data with real content

---

**Need Help?** Check the Supabase community forums or create an issue in your project repository.

**Congratulations!** Your UWARL website is now fully integrated with a production database. 🎉
