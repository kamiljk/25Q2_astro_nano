export const contentSchema = z.object({
  title: z.string(),
  date: z.string().optional(),
  layout: z.string().optional(),
  section: z.enum(['library', 'liminology', 'links', 'about']), // Add new sections if needed
});