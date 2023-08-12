import {SUPABASEURL, SUPABASEKEY} from '../../envCourse'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    SUPABASEURL,
    SUPABASEKEY
)