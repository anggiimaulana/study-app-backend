<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreCounselingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user() && $this->user()->role === 'student';
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'preferred_counselor_id' => ['nullable', 'exists:teachers,id'],
            'issue_description' => ['required', 'string'],
            'reason' => ['nullable', 'string'],
            'target_role' => ['required', 'in:wali_kelas,bk'],
            'urgency_level' => ['required', 'in:rendah,sedang,mendesak,urgen'],
            'preferred_date' => ['nullable', 'date'],
            'preferred_time' => ['nullable', 'string'],
        ];
    }
}
