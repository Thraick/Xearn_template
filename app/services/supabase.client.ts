import { name as appName } from 'package.json';
import type { TypedWindow } from '~/types';

import { createClient } from '@supabase/supabase-js';


const customWindow = window as TypedWindow;
const supabaseUrl = customWindow.ENV.SUPABASE_URL;
const supabaseKey = customWindow.ENV.SUPABASE_ANON_KEY;

export const supabaseClient = createClient(
  supabaseUrl,
  supabaseKey
);
